<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employee= Employee::orderBy("created_at","desc")->get();
        return view("showemployee",["employee"=>$employee]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return view("addemployee");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        // dump($request->all());
$request->validate([
    "name"=>"required|min:6",
    "email"=>"required",
    "password"=>"required"
],[],
[
    "name.required"=>"The name field is required",
    "email.required"=>"The email field is required",
    "password.required"=>"The password field is required"
]);
$data = $request->only(['name', 'email', 'password']);
$data['password'] = bcrypt($data['password']);
if(Employee::create($data))
{
    return redirect()->route("employee.create")->with("success","Form submitted");
}
else{
    return redirect()->route("employee.create")->with("error",value: "Error adding");
}

       
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //

$employee= Employee::find($id);
return view("editemployee",["employee"=>$employee]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
$employee = Employee::find($id);
        if(Hash::check($request->password,$employee->password))
        {
            return redirect()->route("employee.edit",$id)->with("error","You have used old password");
        }
        $request->validate([
            "name"=>"required|min:6",
            "email"=>"required"
        ],[],
        [
            "name.required"=>"The name field is required",
            "email.required"=>"The email field is required"
           
        ]);
       
        $employee->name=$request->name;
        $employee->email=$request->email;
        $employee->password=Hash::make($request->password);
        if($employee->save())
        {
            return redirect()->route("employee.edit",$id)->with("success","Form updated");
        }
        else{
            return redirect()->route("employee.edit",$id)->with("error",value: "Error updating");
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        Employee::find($id)->delete();
        return redirect()->route("employee.index")->with("success","Deleted");
    }
}
