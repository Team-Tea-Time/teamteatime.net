<?php namespace App\Models;

use App\Libraries\Utils;
use App\Models\Traits\Ago as AgoTrait;
use App\Models\Traits\Archivable as ArchivableTrait;
use App\Models\Traits\Ownable as OwnableTrait;
use App\Models\Traits\Taggable as TaggableTrait;
use Eloquent;
use Markdown;

class BlogPost extends Eloquent
{

    use AgoTrait, ArchivableTrait, OwnableTrait, TaggableTrait;

    protected $fillable = ['user_id', 'title', 'body'];

    public function getBodyParsedAttribute()
    {
        return Markdown::convertToHtml($this->body);
    }

    public function getSummaryAttribute()
    {
        return Markdown::convertToHtml(str_limit($this->body, 250));
    }

    public function getRouteAttribute()
    {
        $slug = Utils::urlEncode($this->title);
        return route('blog.post.show', ['year' =>  $this->created_at->year, 'id' => $this->id, 'slug' => $slug]);
    }

    public function getEditRouteAttribute()
    {
        return route('blog.post.edit', ['post' => $this->id]);
    }

}
