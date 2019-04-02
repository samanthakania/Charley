require 'test_helper'

class ParksControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get parks_create_url
    assert_response :success
  end

end
