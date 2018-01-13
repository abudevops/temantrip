require 'test_helper'

class UmrohControllerTest < ActionDispatch::IntegrationTest
  test "should get list" do
    get umroh_list_url
    assert_response :success
  end

end
