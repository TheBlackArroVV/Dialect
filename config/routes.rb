Rails.application.routes.draw do
  post '/words/find_region', to: 'words#find_region'
  post '/words/find_district', to: 'words#find_district'
  post '/words/find_city', to: 'words#find_city'
  root to: 'pages#index'
  get '/news', to: 'posts#news'
  get '/articles', to: 'posts#articles'
  resources :words
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
