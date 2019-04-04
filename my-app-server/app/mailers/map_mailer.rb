class MapMailer < ApplicationMailer::Base
  default :from => 'charley@example.com'

  def send_signup_email(trip_id)
    @trip_id = trip_id
    mail( :to => @trip_id.email,
    :subject => 'Thank you for creating a trip' )
    end
  end
