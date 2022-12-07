require "test_helper"

class Api::TodosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_todos_index_url
    assert_response :success
  end
end
