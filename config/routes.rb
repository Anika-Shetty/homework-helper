Rails.application.routes.draw do
  resources :submissions, only: [:show]
  resources :text_books, only: [:show]
  devise_for :users
  root "homepage#index"
end
