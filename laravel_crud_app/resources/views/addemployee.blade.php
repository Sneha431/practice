
@extends("layout.base")
@section("title")
Add Employee
@endsection("title")

@section("content")


@if(session('error'))
<div>Some error occured while submiting</div>
@elseif(session('success'))
<div>Form submitted successfully</div>
@endif

<div class="p-2 bg-amber-400 h-[300px] w-full">
    <form action={{route('employee.store')}} method="post">
        @csrf
<label>Name</label>
<input type="text" name="name" placeholder="name" class="@error('name') is-invalid
@enderror"/>
@error("name")
<p class="invalid-feedback">{{ $message }}</p>
@enderror
<label>Name</label>
<input type="text" name="email" placeholder="email" class="@error('name') is-invalid
@enderror"/>
@error("email")
<p class="invalid-feedback">{{ $message }}</p>
@enderror
<label>Password</label>
<input type="text" name="password" placeholder="password" class="@error('name') is-invalid
@enderror"/>
@error("password")
<p class="invalid-feedback">{{ $message }}</p>
@enderror
<input type="submit" value="Add"/>
    </form>
</div>

@endsection