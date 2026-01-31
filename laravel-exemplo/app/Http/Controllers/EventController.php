<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index(Request $request)
    {
        $event = Event::where('id', $request->id)->first();
        return response()->json($event);
    }

    public function store(Request $request)
    {
        $event = new Event();
        $event->name = $request->name;
        $event->save();

        return response()->json($event);
    }
}
