<?php namespace App\Repositories;

use App;
use App\Models\Page;

class Pages extends BaseRepository
{

    public function __construct()
    {
        $this->model = new Page;
        $this->pageLimit = 20;
    }

    public function findBySlug($slug, $check404 = true)
    {
        $page = $this->model->where('slug', '=', $slug)->first();

        if ($check404)
        {
            self::check404($page);
        }

        return $page;
    }

}
