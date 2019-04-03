class MapMailer < ApplicationMailer::Base
  default :from => 'charley@example.com'

  def send_signup_email(tripid)
    @tripid = tripid
    mail( :to => @tripid.email,
    :subject => 'Thank you for creating a trip' )
    end
  end
