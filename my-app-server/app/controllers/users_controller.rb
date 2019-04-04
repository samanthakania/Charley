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
     else
      puts "err"
      
    end
  end
  def save_route
      origin = params[:origin]
      destination = params[:destination]
      park_ids = params[:waypoints]
      @route = Route.new({
         origin: origin,
         destination: destination,
         trip_id: 'hardcoded styll',
         list_id: 42069,
      })
   park_ids.select do |id|
      park = Park.find(id)
      @route.parks << park
      end
      byebug
       if @route.save
           render json: @route.parks
      else
         puts "err"
      end
  end
end
