<?php namespace App\Models\Traits;

trait Archivable
{

    public function scopeArchive($query, $year, $month = null)
    {
        $query = $this->whereRaw('YEAR(created_at) = ?', [$year]);

        if (!is_null($month))
        {
            return $query->whereRaw('MONTH(created_at) = ?', [$month]);
        }

        return $query;
    }

}
