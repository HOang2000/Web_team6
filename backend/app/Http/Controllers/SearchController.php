<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Student;
use App\School;
use App\Company;

class SearchController extends Controller
{
    public function student(Request $request)
    {
       // return $request->all();
        return Student::filter($request->all())->paginateFilter();
    }
    public function school(Request $request)
    {
       // return $request->all();
        return School::filter($request->all())->paginateFilter();
    }
    public function company(Request $request)
    {
       // return $request->all();
        return Company::filter($request->all())->paginateFilter();
    }
}