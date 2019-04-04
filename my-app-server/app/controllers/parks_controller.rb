class ParksController < ApplicationController
  def index
    puts "index"
    @parks = Park.all.order(created_at: :desc)
 
    render json: @parks
  
  end
  def show 
  end
end
