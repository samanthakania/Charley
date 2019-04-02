require "http"
class ApiController < ApplicationController
 def nps_api_show
   key = ENV['NPS_API_KEY']
    park_code = nil
    url = "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=#{key}"
    http = HTTP.get(url)
    render json: http
  end
end