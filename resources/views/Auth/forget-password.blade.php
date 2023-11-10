@extends('Auth.layout')
@section('title', 'Request password reset')

@section('contents')
    <section class="vh-100">
        <div class="h-100 container py-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-2-strong" style="border-radius: 1rem;">
                        <div class="card-body p-5 text-center">

                            <h3 class="mb-5">Password reset request</h3>

                            <p>Please enter your email.</p>

                            <div class="form-outline mb-4">
                                <input type="email" id="typeEmailX-2" class="form-control form-control-lg"
                                    placeholder="Email" />
                                {{-- <label class="form-label" for="typeEmailX-2">Email</label> --}}
                            </div>

                            <button class="btn btn-primary btn-lg btn-block" type="submit">Reset request</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
