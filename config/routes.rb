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


  end
end
