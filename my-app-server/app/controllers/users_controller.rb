class UsersController < ApplicationController
   def  create_route
    user = params[:email]
     trip_id = params[:trip_id]
    @trip = Trip.new({
      email: user,
      trip_id: trip_id 
    })
    puts "#########{@trip}#####3"
     if @trip.save
        render json: @trip
     end
  end
  def save_route
  origin = params[:origin]
  destination = params[:destination]
  park_id = params[:waypoints]
  puts "#{params}"
   byebug
  end
end
