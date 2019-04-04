class TodoController < ApplicationController
    
    def create_todo
        puts "********************"
        puts "test: #{params[:text]}"
        puts "********************"
    end

end
