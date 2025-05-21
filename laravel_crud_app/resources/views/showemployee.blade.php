@extends("layout.base")
@section("title")
All Employee list
@endsection("title")


@section("content")
@if(session('error'))
<div>{{ session('error') }}</div>
@elseif(session('success'))
<div>{{ session('success') }}</div>
@endif
@foreach ($employee as $emp)
<div>
<ul>
    <li>{{ $emp->name }}</li>
    <li>{{ $emp->email }}</li>
    <li>
        <button><a href="{{ route("employee.edit",$emp->id) }}">Edit</a></button>
        <button>
            <form action="{{ route("employee.destroy",$emp->id) }}" method="post">
                @csrf
                @method("delete")
<button type="submit">Delete</button>
        </form>
    </button>
    </li>
</ul>
</div>
@endforeach
@endsection