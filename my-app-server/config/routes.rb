Rails.application.routes.draw do
  get 'api/nps_api_show'
  get 'parks/index'
  post '/park/show' => 'parks#show'
  get 'twitterfeed/index'
  root to: 'pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
