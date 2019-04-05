Rails.application.routes.draw do
  post 'users/find_route'
  get 'api/nps_api_show'
  get 'parks/index'
  post 'users/create_route'
  # post 'park/show' => 'parks#show'
  post 'users/save_route'
  get 'twitterfeed/index'
  root to: 'pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
