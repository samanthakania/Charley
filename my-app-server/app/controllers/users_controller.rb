class UsersController < ApplicationController
   def create
     # Create the id from params
     @tripid = User.new(params[:trip_id])
     if @user.save
       # Deliver the email
       MapMailer.send_signup_email(@trip_id).deliver
       redirect_to(@trip_id, :notice => 'Trip created')
     else
       render :action => 'new'
     end
   end
 end