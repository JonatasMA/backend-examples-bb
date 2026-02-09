-- example HTTP POST script which demonstrates setting the
-- HTTP method, body, and adding a header

math.randomseed(os.time()) -- Seed the random number generator

local function generate_uuid()
    local template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    return string.gsub(template, '[xy]', function(c)
        local v = (c == 'x') and math.random(0, 15) or math.random(8, 11)
        return string.format('%x', v)
    end)
end

wrk.method                  = "POST"
wrk.body                    = "name=" .. generate_uuid()
wrk.headers["Content-Type"] = "application/x-www-form-urlencoded"
