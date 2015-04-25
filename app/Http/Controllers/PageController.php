<?php namespace App\Http\Controllers;

use App;
use App\Http\Controllers\Controller;
use App\Models\Page;
use Auth;
use Input;
use Redirect;
use View;

class PageController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth', ['except' => ['index', 'show']]);
        $this->repository = App::make('App\Repositories\Pages');
    }

    /*
    |--------------------------------------------------------------------------
    | Resource methods
    |--------------------------------------------------------------------------
    */

    public function _list()
    {
        $pages = $this->repository->get(['sorted' => false]);

        return View::make('pages.list', ['pages' => $pages]);
    }

    public function index()
    {
        $page = $this->repository->findBySlug(config('pages.default'));

        return View::make('pages.show', ['page' => $page]);
    }

    public function create()
    {
        return View::make('pages.create');
    }

    public function store()
    {
        $input = array_merge($this->getInput(), ['user_id' => Auth::user()->id]);

        $page = $this->repository->create($input);

        return Redirect::to($page->route)->with('success', 'Your page has been created successfully.');
    }

    public function show($slug)
    {
        $page = $this->repository->findBySlug($slug);

        return View::make('pages.show', ['page' => $page]);
    }

    public function edit(Page $page)
    {
        return View::make('pages.edit', ['page' => $page]);
    }

    public function update(Page $page)
    {
        $input = $this->getInput();
        $page->fill($input);
        $page->save();

        return Redirect::to($page->route)->with('success', 'Your page has been updated successfully.');
    }

    public function destroy(Page $page)
    {
        $page->delete();

        return Redirect::to('pages')->with('success', 'Your page has been deleted successfully.');
    }

    /*
    |--------------------------------------------------------------------------
    | Helper methods
    |--------------------------------------------------------------------------
    */

    protected function getInput()
    {
        return [
            'title'     => Input::get('title'),
            'slug'      => Input::get('slug'),
            'content'   => Input::get('content')
        ];
    }

}
