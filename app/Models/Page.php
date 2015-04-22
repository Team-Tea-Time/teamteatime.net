<?php namespace App\Models;

use Eloquent;
use App\Models\Traits\Ago as AgoTrait;
use App\Models\Traits\Ownable as OwnableTrait;

class Page extends Eloquent
{

    use AgoTrait, OwnableTrait;

    protected $fillable = ['user_id', 'title', 'slug', 'content'];

    public function getRouteAttribute()
    {
        return route('pages.show', ['slug' => $this->slug]);
    }

    public function getEditRouteAttribute()
    {
        return route('pages.edit', ['pages' => $this->id]);
    }

}
