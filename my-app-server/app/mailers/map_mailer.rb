class MapMailer < ApplicationMailer
  def comfirm_email
    @map = Map.create()
    @map
    # @map= params[:email] 
    @map.trip_id = 'zipzipzipppy'
    @url = 'http://example.com/login'
    mail(to: @map.email)
  end
