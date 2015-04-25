<?php namespace App\Repositories;

use App;
use Auth;

class BaseRepository
{

    protected $model;
    protected $pageLimit;

    public function find($id, $check404 = true)
    {
        return ($check404) ? $this->model->findOrFail($id) : $this->model->find($id);
    }

    public function getAll()
    {
        return $this->model->all();
    }

    public function getByID( $id )
    {
        return $this->model->where( 'id', '=', $id )->first();
    }

    public function get($options = array() )
    {
        $options += [
            'newest_first'  => true,
            'sorted'        => false,
            'paginated'     => true
        ];

        if ($options['newest_first'])
        {
            $this->model = $this->model->orderBy('created_at', 'DESC');
        }

        if ($options['sorted'])
        {
            $this->model = $this->model->sort();
        }

        if ($options['paginated'])
        {
            return $this->model->paginate($this->pageLimit);
        }

        return $this->model->get();
    }

    public function has($relationship)
    {
        $this->model = $this->model->has($relationship);
        return $this;
    }

    public function where($column, $operator, $value)
    {
        $this->model = $this->model->where( $column, $operator, $value );
        return $this;
    }

    public function withTags($tags, $all = false)
    {
        if (!is_array($tags))
        {
            $tags = [$tags];
        }

        if ($all)
        {
            $this->model = $this->model->withAllTags($tags);
        }
        else
        {
            $this->model = $this->model->withAnyTag($tags);
        }

        return $this;
    }

    public function byUser($userID = 0)
    {
        $userID = ($userID > 0) ? $userID : Auth::user()->id;

        $this->model = $this->model->where('user_id', '=', Auth::user()->id);

        return $this;
    }

    public function byFilters($filters = array())
    {
        // Tags have their own method
        if (isset($filters['tags']))
        {
            if (!empty($filters['tags']))
            {
                $this->model = $this->model->withAnyTag($filters['tags']);
            }

            unset($filters['tags']);
        }

        foreach ($filters as $column => $value)
        {
            $this->model = $this->model->where($column, 'LIKE', "%{$value}%");
        }

        return $this;
    }

    public function create($input)
    {
        $this->model = $this->model->create($input);
        return $this->model;
    }

    public function check404($model)
    {
        if (is_null($model))
        {
            App::abort(404, 'Page Not Found');
        }
    }

}
