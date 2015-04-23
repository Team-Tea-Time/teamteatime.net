<?php namespace App\Repositories\Traits;

use DB;

trait Archivable
{

    public function byArchive($year, $month = null)
    {
        $this->model = $this->model->archive($year, $month);
        return $this;
    }

    public function getArchive()
    {
        $posts = DB::table($this->model->getTable())
            ->select(DB::raw('YEAR(created_at) year, MONTH(created_at) month, MONTHNAME(created_at) month_name, COUNT(*) post_count'))
            ->orderBy('year', 'desc')
            ->orderBy('month', 'desc')
            ->groupBy('year')
            ->groupBy('month')
            ->get();
            
        return $posts;
    }

}
