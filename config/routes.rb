Rails.application.routes.draw do
  
  namespace :api do
    resources :lists do
      resources :todos
    end

    resources :todos, except: [:index, :show, :create, :update, :destroy] do
      resources :notes
    end
    
  end
end