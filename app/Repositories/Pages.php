<?php namespace App\Repositories;

use App;
use App\Models\Page;

class Pages
{

    public static function findBySlug($slug, $check404 = true)
    {
        $page = Page::where('slug', '=', $slug)->first();

        if ($check404)
        {
            self::check404($page);
        }

        return $page;
    }

    public static function find($id, $check404 = true)
    {
        return ($check404) ? Page::findOrFail($id) : Page::find($id);
    }

    public static function create($input)
    {
        $page = new Page;
        $page->create($input);
        
        return $page;
    }

    public static function check404($page)
    {
        if (is_null($page))
        {
            App::abort(404, 'Page Not Found');
        }
    }

}
