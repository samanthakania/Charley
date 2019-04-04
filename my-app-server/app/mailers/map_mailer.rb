class MapMailer < ApplicationMailer
  default :from => 'charley@example.com'

  def send_signup_email(trip)
    @trip = trip
    mail( :to => @trip.email,
    :subject => 'Thank you for creating a trip' )
    end
  end
