class TwitterfeedController < ApplicationController
  def index 
     puts "  here #{ENV['CONSUMER_KEY']}"
     puts "#######{params[:name]}######"
      look_up = params[:name]
      client = Twitter::REST::Client.new do |config|
      config.consumer_key = ENV['CONSUMER_KEY']
      config.consumer_secret = ENV['SECRET_KEY']
      config.access_token = ENV['ACCESS_TOKEN']
      config.access_token_secret = ENV['SECRET_ACCESS_TOKEN']
      app_only_auth = true 
    end
    @tweeterfeed =client.search("#{look_up}", result_type: "recent").take(20).collect do |tweet|
      output = Hash[tweet]
    end  
    render json: @tweeterfeed
  end
end
