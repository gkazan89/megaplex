Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    get "/movies" => "movies#index"

    get "/movies/:id" => "movies#show"

    post "/movies" => "movies#create"

    post "/movies/:id" => "movies#update"

    delete "/movies/:id" => "movies#destroy"
  end
end
