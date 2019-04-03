class UsersController < ApplicationController
   def  create_route
   user = params[:user][:email]
   puts "#{user}"
  end
end
