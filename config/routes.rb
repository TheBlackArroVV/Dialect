Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  devise_scope :user do
    get '/login', to: 'devise/sessions#new'
    post '/login', to: 'devise/sessions#new'
    get '/registration', to: 'devise/registrations#new'
    post 'registration', to: 'users/registrations#create'
 end
  post '/words/find_region', to: 'words#find_region'
  post '/words/find_district', to: 'words#find_district'
  post '/words/find_city', to: 'words#find_city'
  root to: 'pages#index'
  get '/news', to: 'posts#news'
  get '/articles', to: 'posts#articles'
  resources :words
  resources :posts
  resources :letters
  get '/contacts', to: 'letters#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
