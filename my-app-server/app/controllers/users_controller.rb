# frozen_string_literal: true

class UsersController < ApplicationController
  def create_route
    user = params[:email]
    trip_id = params[:trip_id]
    
    @trip = Trip.new(
      email: user,
      trip_id: trip_id
    )
    if @trip.save
      MapMailer.send_signup_email(@trip).deliver
      render json: @trip
    else
      render action: 'new'
    end
 end

  def save_route
    origin = params[:origin]
    destination = params[:destination]
    park_ids = params[:waypoints]
    trip_id = params[:tripId]
    @route = Route.new(
      origin: origin,
      destination: destination,
      trip_id: trip_id,
      list_id: trip_id
    )
    park_ids.select do |id|
      park = Park.find(id)
      @route.parks << park
    end
    if @route.save
      render json: @route.parks
    else
      puts 'err'
   end
  end

  def find_route
    id = params[:search]
    @route = Route.find_by trip_id: id
    @list = List.find_by trip_id: id
    if @route.nil?
      render json: nil
    else
      output = { 'route' => @route, 'parks' => @route.parks, 'todo_list' => @list.todos.order(:id), 'list_id' => @list.id }
      render json: output
    end
end

  private

  def trip_params
    params.require(:trip).permit(:trip_id, :email)
  end
end
