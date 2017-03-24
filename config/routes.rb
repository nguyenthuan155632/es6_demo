Rails.application.routes.draw do
  resources :blogs

  resources :posts do
  	collection do
  		get 'redis', to: 'posts#redis'
  	end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
