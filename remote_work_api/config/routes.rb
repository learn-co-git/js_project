Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

      namespace :api do
        namespace :v1 do
          resources :office
        end
      end

      get 'api/v1/office' => 'office#index'
      post 'api/v1/createoffice' => 'office#create'

end
