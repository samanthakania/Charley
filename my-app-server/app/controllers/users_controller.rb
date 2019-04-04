class UsersController < ApplicationController
   def create
     # Create the id from params
     @trip_id = Trip.new(trip_params)
     if @trip_id.save
       # Deliver the email
       MapMailer.send_signup_email(@trip_id).deliver
       redirect_to(@trip_id, :notice => 'Trip created')
     else
       render :action => 'new'
     end
   end
     private

  def trip_params
    params.require(:trip).permit(:trip_id, :email)
  end
 end