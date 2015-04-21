<?php namespace App\Http\Controllers;

use App;
use App\Http\Controllers\Controller;
use App\Repositories\Pages;
use Auth;
use Input;
use Redirect;
use View;

class PageController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth', ['except' => ['index', 'show']]);
    }

    /*
    |--------------------------------------------------------------------------
    | Resource methods
    |--------------------------------------------------------------------------
    */

    public function index()
    {
        $page = Pages::findBySlug(config('pages.default'));

        return View::make('pages.show', ['page' => $page]);
    }

    public function create()
    {
        return View::make('pages.create');
    }

    public function store()
    {
        $input = array_merge($this->getInput(), ['user_id' => Auth::user()->id]);

        $page = Pages::create($input);

        return Redirect::route('pages.show', ['pages' => $page->slug])
            ->with('success', 'Your page has been created successfully.');
    }

    public function show($slug)
    {
        $page = Pages::findBySlug($slug);

        return View::make('pages.show', ['page' => $page]);
    }

    public function edit($id)
    {
        $page = Pages::find($id);

        return View::make('pages.edit', ['page' => $page]);
    }

    public function update($id)
    {
        $input = $this->getInput();

        $page = Pages::find($id);
        $page->fill($input);
        $page->save();

        return Redirect::route('pages.show', ['slug' => $page->slug])
            ->with('success', 'Your page has been updated successfully.');
    }

    public function destroy($id)
    {
        $page = Pages::find($id);
        $page->delete();

        return Redirect::to('/')->with('success', 'Your page has been deleted successfully.');
    }

    /*
    |--------------------------------------------------------------------------
    | Helper methods
    |--------------------------------------------------------------------------
    */

    protected function getInput()
    {
        return [
            'title'      => Input::get('title'),
            'slug'       => Input::get('slug'),
            'content'    => Input::get('content')
        ];
    }

}
