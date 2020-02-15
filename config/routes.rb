Rails.application.routes.draw do
  root 'default#index'
  match '*path', to: 'default#index', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
