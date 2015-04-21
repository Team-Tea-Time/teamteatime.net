<?php namespace App\Models\Traits;

use App\Libraries\Time;

trait Ago
{

    public function getCreatedAgoAttribute()
    {
        return Time::convertTimestampToHumanDiff( $this->created_at );
    }

    public function getUpdatedAgoAttribute()
    {
        return Time::convertTimestampToHumanDiff( $this->updated_at );
    }

}
