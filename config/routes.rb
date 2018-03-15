Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users, controllers: {
        registrations: 'registrations'
    }
  end
  devise_scope :user do
    get '/login', to: 'devise/sessions#new'
    get '/registration', to: 'devise/registrations#new'
    post '/registration', to: 'devise/registrations#create'
  end
  get '/map', to: 'pages#map'
  post '/map', to: 'pages#map'
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
  get '/map', to: 'pages#map'
  get '/about-us', to: 'pages#about_us'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
