<?php namespace App\Models;

use Eloquent;
use App\Models\Traits\Ago as AgoTrait;
use App\Models\Traits\Ownable as OwnableTrait;

class Page extends Eloquent
{

    use AgoTrait, OwnableTrait;

    protected $fillable = ['user_id', 'title', 'slug', 'content'];

}
