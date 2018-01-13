Rails.application.routes.draw do
  get 'home/index'
  root 'home#index'

  get 'umroh/list', to: 'umroh#list'
  get 'umroh/detail', to: 'umroh#detail'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
