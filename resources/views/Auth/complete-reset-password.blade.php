@extends('Auth.layout')
@section('title', 'Completed reset password')

@section('contents')
    <section class="vh-100">
        <div class="h-100 container py-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-2-strong" style="border-radius: 1rem;">
                        <div class="card-body p-5 text-center">
                            <h3 class="mb-5">Completed reset</h3>

                            <p>Login again.</p>

                            <a class="btn btn-primary" href="/login" role="button">Login page</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
