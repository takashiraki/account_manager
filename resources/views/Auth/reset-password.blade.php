@extends('Auth.layout')
@section('title', 'Completed password rese request')

@section('contents')
    <section class="vh-100">
        <div class="h-100 container py-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-2-strong" style="border-radius: 1rem;">
                        <div class="card-body p-5 text-center">

                            <h3 class="mb-5">Reset password</h3>

                            <div class="form-outline mb-4">
                                <input type="password" id="typePasswordX-2" class="form-control form-control-lg"
                                    placeholder="Password" />
                                {{-- <label class="form-label" for="typeEmailX-2">Email</label> --}}
                            </div>

                            <div class="form-outline mb-4">
                                <input type="password" id="typePasswordX-2" class="form-control form-control-lg"
                                    placeholder="Password again" />
                                {{-- <label class="form-label" for="typePasswordX-2">Password</label> --}}
                            </div>
                            <button class="btn btn-primary btn-lg btn-block" type="submit">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
