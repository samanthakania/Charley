class ParksController < ApplicationController
  def index
    @parks = Park.all.order(created_at: :desc)
    render json: @parks
  
  end
end
