
@extends("layout.base")
@section("title")
Edit Employee
@endsection("title")

@section("content")


@if(session('error'))
<div>{{ session('error') }}</div>
@elseif(session('success'))
<div>{{ session('success') }}</div>
@endif

<div class="p-2 bg-amber-400 h-[300px] w-full flex flex-col space-y-4 justify-center items-center">
    <form action={{route('employee.update',$employee->id)}} method="post">
        @csrf
        @method("put")
<div>
<label>Name</label>
<input type="text" name="name" placeholder="name" class="@error('name') is-invalid
@enderror p-2" value="{{ $employee->name }}"/>
@error("name")
<p class="invalid-feedback">{{ $message }}</p>
@enderror
</div>
<div>
<label>Email</label>
<input type="text" name="email" placeholder="email" class="p-2 w-3xs @error('name') is-invalid
@enderror" value="{{ $employee->email }}"/>
@error("email")
<p class="invalid-feedback">{{ $message }}</p>
@enderror
</div>
<div>
<label>Password</label>
<input type="text" name="password" placeholder="password"/>
</div>

<input type="submit" value="Update"/>
    </form>
</div>

@endsection