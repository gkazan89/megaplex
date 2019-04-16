Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do

    get "/movies" => "movies#index"
    get "/movies/:id" => "movies#show"
    post "/movies" => "movies#create"
    post "/movies/:id" => "movies#update"
    delete "/movies/:id" => "movies#destroy"

    get "/theaters" => "theaters#index"
    post "/theaters" => "theaters#create"
    delete "/theaters/:id" => "theaters#destroy"

    get "/showtimes" => "showtimes#index"
    post "/showtimes" => "showtimes#create"
    post "/showtimes/:id" => "showtimes#update"
    delete "/showtimes/:id" => "showtimes#delete"

    get "/tickets" => "tickets#index"
    get "/tickets/:id" => "tickets#show"
    post "/tickets" => "tickets#create"

  end
end
