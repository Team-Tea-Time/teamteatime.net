<?php namespace App\Models\Traits;

use Auth;

trait Ownable
{

    public function owner()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }

    public function getOwnerColumnAttribute()
    {
        return ( isset( $this->owner_column ) ) ? $this->owner_column : 'user_id';
    }

    public function getUserIsOwnerAttribute()
    {
        return ( Auth::user()->id == $this->ownerColumn );
    }

}
