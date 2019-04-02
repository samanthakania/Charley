class MapMailer < ApplicationMailer
  def comfirm_email
    @map= params[:email]
    @url = 'http://example.com/login'
  end
